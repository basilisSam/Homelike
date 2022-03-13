export interface CommentData {
  body: string;
  publishedAt: string;
}

export function IssueComment(comment: CommentData) {
  const issueDate = comment.publishedAt;

  const time = new Date(issueDate).toLocaleTimeString("en", {
    timeStyle: "medium",
    hour12: false,
  });

  const date = issueDate.substring(0, 10);

  return (
    <>
      <div className="flex justify-center relative top-1/3 mb-4">
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg border-blue-500 w-1/2  bg-white shadow-lg">
          <div className="relative flex gap-4">
            <img
              src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
              className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                  COMMENTOR
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                {date} {time}
              </p>
            </div>
          </div>
          <p className="-mt-4 px-4 pb-2 text-gray-500">{comment.body}</p>
        </div>
      </div>
    </>
  );
}
