import { Navbar } from "~/components/Navbar";
import poster from "~/assets/images/sleepSyncPoster.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <section
          className="bg-fixed h-screen w-full "
          style={{
            backgroundImage: `url(${poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black/40 col w-1/2 h-full ">Some texst</div>
        </section>
      </div>
    </>
  );
}
