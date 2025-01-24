import poster from "~/assets/images/sleepSyncPoster.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export async function loader() {
  return { undefined };
}

export default function Shop() {
  return (
    <div className="grid grid-cols-5 h-screen ">
      <div className="col-span-3">
        <img src={poster} className="object-cover w-full h-full" />
      </div>
      <div className="grid grid-rows-3 p-20 col-span-2">
        <div>
          <div className="text-3xl font-bold ">SleepSync Bundle</div>
        </div>
        <div className=" grid grid-cols-3 gap-5 h-32">
          <Card className="h-32">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>

          <Card className="h-32">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>

          <Card className="h-32">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>

          <Card className="h-32 col-span-3">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
