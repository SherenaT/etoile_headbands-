const qtyOrdered = [];
let orderNumber = 326532;

module.exports = {
  addCharItem: (req, res) => {
    const { charlotteHBQty, productName } = req.body;

    const newCharItem = {
      orderNumber: orderNumber++,
      productName,
      charlotteHBQty,
    };
    qtyOrdered.push(newCharItem);
    console.log(qtyOrdered);
    res.status(200).send(qtyOrdered);
  },
  addAdeItem: (req, res) => {
    const { adelynHBQty, productName } = req.body;

    const newAdeItem = {
      orderNumber: orderNumber++,
      productName,
      adelynHBQty,
    };
    qtyOrdered.push(newAdeItem);
    console.log(qtyOrdered);
    res.status(200).send(qtyOrdered);
  },
  addSarItem: (req, res) => {
    const { sarahHBQty, productName } = req.body;

    const newSarItem = {
      orderNumber: orderNumber++,
      productName,
      sarahHBQty,
    };
    qtyOrdered.push(newSarItem);
    console.log(qtyOrdered);
    res.status(200).send(qtyOrdered);
  },
  addEvaItem: (req, res) => {
    const { evanglineHBQty, productName } = req.body;

    const newEvaItem = {
      orderNumber: orderNumber++,
      productName,
      evanglineHBQty,
    };
    qtyOrdered.push(newEvaItem);
    console.log(qtyOrdered);
    res.status(200).send(qtyOrdered);
  },
};

console.log("testing from controller");
