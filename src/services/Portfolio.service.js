import httpReq from "./http.services";

let auth = { Authorization: `Bearer ${localStorage.getItem("accessToken")}` };



class PortfolioService {

  async portfolioGet() {
    if(auth){
      const mainValue = await httpReq.get(
        `/learner/portfolio`,
        auth
      );
      return mainValue.data;

    }
   
  }

  async portfolioPost(value) {
    const mainValue = await httpReq.post(
      `/learner/portfolio`,
      value,
      auth
    );
    return mainValue.data;
  }

  async portfolioPatch(value,id) {
    const mainValue = await httpReq.patch(`/learner/portfolio/${id}`, value,auth);
    return mainValue.data;
  }

  async portfoliosDelete(value) {
    const mainValue = await httpReq.delete(
      `/learners/${localStorage.getItem("uid")}`,
      value,
      auth
    );
    return mainValue.data;
  }
}

export default new PortfolioService();
