export const githubLoaderInfo = async () => {
    const response = await fetch("https://api.github.com/users/singhpritpal04");
    return response.json();
}