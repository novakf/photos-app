import { accessToken, version } from "./consts.js";

class Urls {
  constructor() {
    this.url = "https://api.vk.com/method";
    this.commonInfo = `access_token=${accessToken}&v=${version}`;
  }

  getUserInfo(userId) {
    return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig&${this.commonInfo}`;
  }

  getGroupMembers(groupId) {
    return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`;
  }

  sortMembersAsc(groupId) {
    return `${this.url}/groups.getMembers?group_id=${groupId}&sort=time_asc&fields=photo_400_orig&${this.commonInfo}`;
  }

  sortMembersAsc(groupId) {
    return `${this.url}/groups.getMembers?group_id=${groupId}&sort=time_desc&fields=photo_400_orig&${this.commonInfo}`;
  }
}

export const urls = new Urls();
