// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.map(item => item.price)
    .reduce((prev, current) => prev + current, 0);
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };
  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {  
  const orderIndex = orders.findIndex(order => order.id === orderId);
  orders[orderIndex].status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const orderCalculate = orders.filter(order => order.status == 'Selesai')
    .reduce((prev, order) => prev + order.totalPrice, 0);
  return orderCalculate;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
