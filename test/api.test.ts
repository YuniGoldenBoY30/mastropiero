import ApiService from '../src/servicios/api';

describe('ApiService', () => {
  it('debería obtener posts de la API', async () => {
    const posts = await ApiService.getPosts();
    console.log(posts);
    expect(posts).toBeDefined();
    expect(posts.length).toBeGreaterThan(0);
  });
});
