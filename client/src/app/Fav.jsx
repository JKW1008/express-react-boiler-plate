import Layout from "../components/Layout";
import useUser from "../hooks/useUser";

export default function Fav() {
  const {user} = useUser();
  const missions = user?.missionCompleted;
  console.log(missions);
  return (
    <Layout isFooter>
      <div className="py-16 px-4">fav</div>
    </Layout>
  );
}
