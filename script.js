document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('connectWalletBtn').addEventListener('click', connectWallet);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskInput.value;
  taskList.appendChild(li);

  taskInput.value = '';
}

async function connectWallet() {
  if (typeof window.solana === 'undefined') {
    alert('Please install the Phantom wallet extension');
    return;
  }

  const connection = new solanaWeb3.Connection('https://api.mainnet-beta.solana.com');
  const provider = window.solana;

  if (!provider.isConnected) {
    await provider.connect();
  }

  const publicKey = new solanaWeb3.PublicKey(provider.publicKey.toString());
  const balance = await connection.getBalance(publicKey);

  console.log('Connected to Phantom wallet');
  console.log('Public key:', publicKey.toString());
  console.log('Balance:', balance);
}
