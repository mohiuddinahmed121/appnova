const getStoredAppList = () => {
   const storedAppList = localStorage.getItem("app-List");
   if (storedAppList) {
      return JSON.parse(storedAppList);
   }
   return [];
};

const saveAppList = (id) => {
   const storedAppList = getStoredAppList();
   const exists = storedAppList.find((appId) => appId === id);
   if (!exists) {
      storedAppList.push(id);
      localStorage.setItem("app-List", JSON.stringify(storedAppList));
   }
};

export { getStoredAppList, saveAppList };
