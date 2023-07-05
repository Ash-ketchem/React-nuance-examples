import Posts from "@/components/tests/post/Posts";
import User from "@/components/tests/user/User";

import SharedReactivity from "@/components/tests/version3/SharedReactivity/SharedReactivity";
import GroupReactivity from "@/components/tests/version3/groupReactivity/GroupReactivity";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/test">
        <div>test page</div>
      </Link>

      <Posts />
      <User />
      <SharedReactivity />
      <GroupReactivity />
    </main>
  );
}
