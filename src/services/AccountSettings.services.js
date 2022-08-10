import httpReq from "./http.services";

let auth = { Authorization: `Bearer ${localStorage.getItem("accessToken")}` };

class AccountSettingsServices {
  async AccountSettingsGet() {
    const mainValue = await httpReq.get(
      `/learners/${localStorage.getItem("uid")}`,
      auth
    );
    return mainValue.data;
  }

  async AccountSettingsPatch(value) {
    const mainValue = await httpReq.patch(
      `/learners/${localStorage.getItem("uid")}`,
      value,
      auth
    );
    return mainValue.data;
  }

  async AccountSettingsPost(value) {
    const mainValue = await httpReq.post(
      `/learners/${localStorage.getItem("uid")}`,
      value,
      auth
    );
    return mainValue.data;
  }

  async AccountSettingsDelete(value) {
    const mainValue = await httpReq.delete(
      `/learners/${localStorage.getItem("uid")}`,
      value,
      auth
    );
    return mainValue.data;
  }
}

export default new AccountSettingsServices();
