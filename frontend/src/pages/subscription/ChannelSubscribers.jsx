import { useLoggedIn } from "../../context/AuthContext";
import { Route } from "react-router-dom";

const ChannelSubscribers =  () => {


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.get("api/v1/u/:subscriberId", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      console.log(res.data);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  
  }, [])
  
    

  return (
    <>
      <div className="flex  flex-col gap-5 items-center justify-center w-full h-screen bg-slate-200">
        {error ? "Something went wrong" :"User Subscribers fetched successFully"}
        <div className="md:text-8xl text-5xl mb-5 italic">
          ToTal Subscribers
        </div>
        <div className="md:text-8xl text-5xl font-bold flex items-center gap-4 px-6 py-5 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
          <FaUsers className="text-green-500" />
          <span className=" text-green-400">
            {loading ? "Loading..." : "90k"}
          </span>
        </div>
      </div>
    </>
  );
};

export default ChannelSubscribers;
