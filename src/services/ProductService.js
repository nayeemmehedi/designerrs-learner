import httpReq from "./http.services";

class ProductService {
  async getProduct() {
    const data = await httpReq.get("/learner/courses");
    return data.data;
  }
}

export default new ProductService();
