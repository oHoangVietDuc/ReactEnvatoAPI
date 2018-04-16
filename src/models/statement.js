const processDataRaw = (data) => {
  const result = [];
  const orderIdList = [];
  const dataByOrderId = [];
  data.forEach(item => {
    if (!orderIdList.includes(item.order_id)) {
      orderIdList.push(item.order_id);
      const lineItem = {
        date: item.date,
        order_id: item.order_id,
        type: 'Velatheme',
        item_id: item.item_id,
        price: 0,
        au_gst: null,
        eu_vat: null,
        us_rwt: null,
        amount: 0,
        amount_extends_support: 0,
        other_party_country: item.other_party_country,
        other_party_region: item.other_party_region,
        other_party_city: item.other_party_city,
        other_party_zipcode: item.other_party_zipcode
      }
      const arrayByOrderId = data.filter(itemOrderId => itemOrderId.order_id === item.order_id);
      let priceItem = 0;
      arrayByOrderId.forEach(element => {
        priceItem += item.price;
      });
    }
  });
  return result;
};

export const filterDataStatement = ({ data, term }) => {
  const result = {
    statementList: [],
    toltalAmount: 0,
    toltalAmountRefund: 0,
    toltalAmountNoRefund: 0
  };
  let toltal = 0;
  let toltalRefund = 0.00;
  let toltalNoRefund = 0;
  if (data) {
    result.statementList = data.filter(item => item.item_id && String(item.item_id).includes(term));
  }
  if (result.statementList.length > 0) {
    result.statementList.forEach(item => {
      toltal += item.amount;
      if (item.type.includes('Refund')) {
        toltalRefund += item.amount;
      } else {
        toltalNoRefund += item.amount;
      }
    });
  }
  result.toltalAmount = parseFloat(toltal.toFixed(2));
  result.toltalAmountRefund = parseFloat(toltalRefund.toFixed(2));
  result.toltalAmountNoRefund = parseFloat(toltalNoRefund.toFixed(2));
  return result;
};

export const filterDataStatementCompact = ({ data, term }) => {
  const result = {
    statementList: [],
    toltalAmount: 0,
    toltalAmountRefund: 0,
    toltalAmountNoRefund: 0
  };
  if (data) {
    const dataRaw = data.filter(item => item.item_id && String(item.item_id).includes(term));
    result.statementList = processDataRaw(dataRaw);
  }
  return result;
};
