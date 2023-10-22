document.addEventListener("DOMContentLoaded", function () {
    const filterDropdown = document.getElementById("filterDropdown");
    const clientList = document.getElementById("clientList");
    const popup = document.getElementById("popup");
    const clientName = document.getElementById("clientName");
    const clientPoints = document.getElementById("clientPoints");
    const clientAddress = document.getElementById("clientAddress");
    const closePopup = document.getElementById("closePopup");
  
    const jsonData = {
      clients: [
        { isManager: true, id: 1, label: "Client1" },
        { isManager: false, id: 2, label: "Client2" },
        { isManager: false, id: 3, label: "Client3" },
        { isManager: false, id: 4, label: "Client3" },
        { isManager: false, id: 5, label: "Client5" },
      ],
      data: {
        1: { address: "NY", name: "Jhon", points: 123 },
        2: { address: "NY", name: "Dan", points: 123 },
        3: { address: "NY", name: "Ben", points: 123 },
      },
    };
  
    function updateClientList(filter) {
      clientList.innerHTML = "";
      jsonData.clients.forEach((client) => {
        if (filter === "Managers only" && !client.isManager) return;
        if (filter === "Non managers" && client.isManager) return;
  
        const listItem = document.createElement("li");
        listItem.textContent = `${client.label} - Points: ${jsonData.data[client.id].points}`;
        listItem.addEventListener("click", () => {
          clientName.textContent = `Name: ${jsonData.data[client.id].name}`;
          clientPoints.textContent = `Points: ${jsonData.data[client.id].points}`;
          clientAddress.textContent = `Address: ${jsonData.data[client.id].address}`;
          popup.style.display = "block";
        });
        clientList.appendChild(listItem);
      });
    }
  
    filterDropdown.addEventListener("change", () => {
      updateClientList(filterDropdown.value);
    });
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "client details";
    });
  
    updateClientList("All Clients");
  });
  