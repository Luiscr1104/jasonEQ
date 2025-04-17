export interface FacebookPost {
  message?: string;
  permalink_url: string;
  full_picture?: string;
  created_time?: string;
}

export async function fetchFacebookVideoPosts(): Promise<FacebookPost[]> {
  const pageId = "103412355834884"; // ID de tu página Jason Castro
  const accessToken = import.meta.env.FACEBOOK_PAGE_TOKEN;

  const response = await fetch(
    `https://graph.facebook.com/${pageId}/posts?fields=message,permalink_url,full_picture,created_time&access_token=${accessToken}`
  );

  if (!response.ok) {
    const error = await response.json();
    console.error("❌ Error al obtener posts de video:", error);
    throw new Error("Error al obtener publicaciones");
  }

  const data = await response.json();

  // Filtra solo los posts que son videos
  return data.data.filter(
    (post: FacebookPost) =>
      post.permalink_url?.includes("/videos/") && post.full_picture
  );
}
