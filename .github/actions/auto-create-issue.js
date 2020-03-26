const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
 
// See https://developer.github.com/v3/issues/#create-an-issue
const { data } = await octokit.request("POST /repos/:owner/:repo/issues", {
  owner,
  repo,
  title: "ARS random name du random date",
});
console.log("Issue created: %d", data.html_url);