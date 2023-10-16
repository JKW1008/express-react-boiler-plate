import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postJoin = async (req, res) => {
  const { username, password, name, mobile, email } = req.body;

  try {
    const user = await User.create({
      username: username,
      password: password,
      name: name,
      mobile: mobile,
      email: email,
      auth: 2,
      createdAt: Date.now(),
    });
    return res.status(200).json({ ok: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, message: "에러가 발생했습니다." });
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  // console.log(req.body);
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({
      ok: false,
      message: "아이디 혹은 비밀번호가 잘못입력되었습니다.",
    });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(401).json({ ok: false, message: "잘못입력하셨습니다." });
  }

  try {
    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("accessToken", accessToken, {
      secure: true,
      httpOnly: false,
      sameSite: "None",
    });

    return res.status(200).json({ ok: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, message: "인증실패" });
  }
};

export const loginSuccess = async (req, res) => {
  try {
    const { accessToken } = req.cookies;

    const tempData = jwt.verify(accessToken, process.env.ACCESS_SECRET);
    // console.log(tempData.id);
    const id = tempData?.id;

    const loggedInUser = await User.findById(id);
    // console.log(loggedInUser);
    const { username, mobile, email, name, auth, _id, missionCompleted } = loggedInUser;
    return res.status(200).json({
      ok: true,
      username,
      mobile,
      email,
      name,
      auth,
      id: _id,
      missionCompleted
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};


export const postAddMission = async (req, res) => {
  try{
    const { body : {userId, missionId }} = req
    const existing =  await User.findById(userId);
    if(!existing){
      return res.json({ result: 1, message: "로그인 정보가 없습니다." });
    }


    if(existing.missionCompleted.includes(missionId)){
      return res.json({result: 3, message: "이미 인증된 QR코드 입니다."});
    }

    const qrData = ["sun", "rain", "cloudy", "DaeguArtMuseum"];

    if(!qrData.includes(missionId)){
      return res.json({ result: 2, message: "유효하지않은 QR코드입니다."});
    }

    const updatedUser = await User.findByIdAndUpdate(userId, {missionCompleted: missionId});

    return res.status(200).json({ result: 0, message: "QR 인증 성공", updatedUser});

  }catch(error){
    console.log(error);
  }
}