import { useQuery } from "react-query";
// Api
import request from "api/request";

export function useGetCheck(id, withPosts) {
  const queryKey = ["retrieveCheckInfo", `${id}${withPosts}`];
  return {
    ...useQuery(
      queryKey,
      async () =>
        await request({
          url: `${id}${withPosts ? "?get_posts=true" : ""}`,
        }),
      {
        refetchOnWindowFocus: false,
        enabled: !!id,
      },
    ),
  };
}
