export function IssueComment({ comment }: any) {
  return (
    <>
      <div className="container px-6 py-10 mx-auto w-1/2 ">
        <div className="p-8 space-y-3 border-2 border-blue-300 dark:border-blue-300 rounded-xl">
          <p className="text-gray-500 dark:text-gray-300">{comment.body}</p>
        </div>
      </div>
    </>
  );
}
