const chatBox = document.getElementById("chat-box");

// Dummy data nama dan pesan
const viewers = [
  { name: "PawPaw", avatar: "https://i.pravatar.cc/50?img=10", message: "Kucingku juga nonton lho~", isMember: false },
  { name: "NekoQueen 👑", avatar: "https://i.pravatar.cc/50?img=11", message: "Aku member, meow!", isMember: true },
  { name: "MeowLover123", avatar: "https://i.pravatar.cc/50?img=12", message: "Halo semuanya! 🐱", isMember: false },
  { name: "KittyKing 👑", avatar: "https://i.pravatar.cc/50?img=13", message: "Stream-nya seru banget!", isMember: true },
  { name: "Nyanko", avatar: "https://i.pravatar.cc/50?img=14", message: "Aku suka overlay ini!", isMember: false },
  { name: "FurFur", avatar: "https://i.pravatar.cc/50?img=15", message: "Miaw miaw miaw~", isMember: false },
];

let index = 0;

function addChatMessage() {
  const data = viewers[index % viewers.length];

  const msg = document.createElement("div");
  msg.className = "chat-message";
  if (data.isMember) msg.classList.add("member");

  msg.innerHTML = `
    <div class="viewer-name">${data.name}</div>
    <div class="avatar" style="background-image: url('${data.avatar}')"></div>
    <div class="message-content">
      <div class="text">${data.message}</div>
    </div>
  `;

  chatBox.appendChild(msg);

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;

  // Batasi hanya 5 chat
  const chatMessages = chatBox.querySelectorAll(".chat-message");
  if (chatMessages.length > 5) {
    chatBox.removeChild(chatMessages[0]);
  }

  index++;
}

// Tambahkan chat tiap 2 detik
setInterval(addChatMessage, 2000);
