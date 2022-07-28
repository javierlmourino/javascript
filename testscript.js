const products = [
    { name: 'oranges', category: 'fruits' },
    { name: 'kiwi', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' },
    { name: 'bananas', category: 'fruits' },
    { name: 'carrot', category: 'vegetables' },
    { name: 'melons', category: 'fruits' },
    { name: 'lettuce', category: 'vegetables' },
    { name: 'carrot', category: 'vegetables' },
  ];

const groupByCategory = products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, {});

  console.log(groupByCategory);