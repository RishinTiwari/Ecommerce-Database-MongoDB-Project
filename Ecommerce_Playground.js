/* PLAYGROUND FOR Ecommerce */

// Select the database to use.
use('Business');

// Performing operation C = Create Documents: insertOne(), insertMany() for ALL 4 Collections below. 

//1.  Insert a single document into the items collection using insertOne.
db.getCollection('Items').insertOne({

  "ItemID": 11,
  "ItemName": "Product A",
  "Category": "Electronics",
  "Price": 33333333.99,
  "StockQuantity": 100
});

// Insert multiple documents into the items collection.
// Insert multiple documents into the items collection using insertMany
db.getCollection('Items').insertMany([
  {
      "ItemID": 12,
      "ItemName": "Product B",
      "Category": "Clothing",
      "Price": 29.99,
      "StockQuantity": 50
  },
  {
      "ItemID": 13,
      "ItemName": "Product C",
      "Category": "Home & Garden",
      "Price": 79.99,
      "StockQuantity": 75
  }
  
]);


//2. Insert one document into the marketing collection using insertOne.

db.getCollection('marketing').insertOne({
  "CampaignID": 11,
  "CampaignName": "Spring Sale",
  "StartDate": "2023-04-01",
  "EndDate": "2023-05-31",
  "Budget": 7500
});


// Insert multiple documents into the marketing collection using insertMany.
db.getCollection('marketing').insertMany([
  {
      "CampaignID": 12,
      "CampaignName": "Summer Promotion",
      "StartDate": "2023-06-01",
      "EndDate": "2023-08-31",
      "Budget": 8000
  },
  {
      "CampaignID": 13,
      "CampaignName": "Holiday Special",
      "StartDate": "2023-11-01",
      "EndDate": "2023-12-31",
      "Budget": 10000
  }
  
]);



//3. Insert one document into the retail collection using insertOne.
db.getCollection('retail').insertOne({
  "TransactionID": 1,
  "TransactionDate": "2023-11-08",
  "CustomerName": "John Doe",
  "Product": "Product A",
  "Quantity": 5,
  "UnitPrice": 10.99,
  "TotalAmount": 54.95
});


// Insert multiple documents into the retail collection using insertMany.
db.getCollection('retail').insertMany([
  {
      "TransactionID": 2,
      "TransactionDate": "2023-11-09",
      "CustomerName": "Jane Smith",
      "Product": "Product B",
      "Quantity": 3,
      "UnitPrice": 14.99,
      "TotalAmount": 44.97
  },
  {
      "TransactionID": 3,
      "TransactionDate": "2023-11-10",
      "CustomerName": "Bob Johnson",
      "Product": "Product C",
      "Quantity": 2,
      "UnitPrice": 19.99,
      "TotalAmount": 39.98
  }
  
]);

use('Business');
//4. Insert one document into the sales collection using insertOne.
db.getCollection('sales').insertOne({
  "OrderID": 1001,
  "OrderDate": "2023-11-08",
  "CustomerName": "John Doe",
  "Product": "Product A",
  "Quantity": 5,
  "UnitPrice": 10.99,
  "TotalAmount": 54.95
});


// Insert multiple documents into the sales collection using insertMany.
db.getCollection('sales').insertMany([
  {
      "OrderID": 1002,
      "OrderDate": "2023-11-09",
      "CustomerName": "Jane Smith",
      "Product": "Product B",
      "Quantity": 3,
      "UnitPrice": 14.99,
      "TotalAmount": 44.97
  },
  {
      "OrderID": 1003,
      "OrderDate": "2023-11-10",
      "CustomerName": "Bob Johnson",
      "Product": "Product C",
      "Quantity": 2,
      "UnitPrice": 19.99,
      "TotalAmount": 39.98
  }
  
]);



// ************** //

// R = Read Documents: findOne(), find()
use('Business');
//1. Read a single document from the items collection using findOne.
//we are trying to find item witn id 11
var Items = db.getCollection('Items').findOne({
  "ItemID": 11
});
print('Items found using findOne:');
printjson(Items);

// upon executing this code snippet we will get output that item found with details.


// Read multiple documents from the Users collection using find.

var itemsCursor = db.getCollection('Items').find({
  'Category': 'Electronics'
});

print('Items found using find:');
while (itemsCursor.hasNext()) {
  var item = itemsCursor.next();
  printjson(item);
}


//2. marketing Collection



var Items = db.getCollection('marketing').findOne({
  "CampaignID": 11
});
print('Items found using findOne:');
printjson(Items);

use('Business');

var marketingCursor = db.getCollection('marketing').find({});
print('All marketing documents found using find:');
while (marketingCursor.hasNext()) {
  var marketingDocument = marketingCursor.next();
  printjson(marketingDocument);
}



//3. retail Collection

use('Business');

var retailDocument = db.getCollection('retail').findOne({
  "TransactionID": 1
});

print('Retail document found using findOne:');
printjson(retailDocument);

use('Business');
var retailCursor = db.getCollection('retail').find({});
print('All retail documents found using find:');
while (retailCursor.hasNext()) {
  var retailDocument = retailCursor.next();
  printjson(retailDocument);
}

//4. sales Collection
use('Business');

var salesDocument = db.getCollection('sales').findOne({ "_id": ObjectId("654c480aff5785af88b6ef94") });

if (salesDocument) {
  print('Sales document found using findOne:');
  printjson(salesDocument);
} else {
  print('Sales document not found using findOne.');
}


use('Business');

var salesCursor = db.getCollection('sales').find({});
print('All sales documents found using find:');
while (salesCursor.hasNext()) {
  var salesDocument = salesCursor.next();
  printjson(salesDocument);
}



//3. U = Update Documents: updateOne(), updateMany()

use('Business');
// Update a single document in the "Items" collection using updateOne
db.getCollection('Items').updateOne(
  { "ItemID": 1 },
  {
      $set: {
          "Price": 399.99,
          "StockQuantity": 120
      }
  }
);

// Update multiple documents in the "Items" collection using updateMany
db.getCollection('Items').updateMany(
  { "Category": "Electronics" },
  {
      $set: {
          "Price": 299.99
      }
  }
);

// Update a single document in the "Sales" collection using updateOne
db.getCollection('sales').updateOne(
  { "OrderID": 1001 },
  {
      $set: {
          "TotalAmount": 64.95
      }
  }
);

// Update multiple documents in the "Sales" collection using updateMany
db.getCollection('sales').updateMany(
  { "Product": "Product A" },
  {
      $set: {
          "TotalAmount": 59.95
      }
  }
);

// Update a single document in the "Retail" collection using updateOne
db.getCollection('retail').updateOne(
  { "TransactionID": 1 },
  {
      $set: {
          "TotalAmount": 59.95
      }
  }
);

// Update multiple documents in the "Retail" collection using updateMany
db.getCollection('retail').updateMany(
  { "Product": "Product A" },
  {
      $set: {
          "TotalAmount": 54.95
      }
  }
);

// Update a single document in the "Marketing" collection using updateOne
db.getCollection('marketing').updateOne(
  { "CampaignID": 11 },
  {
      $set: {
          "Budget": 8000
      }
  }
);

// Update multiple documents in the "Marketing" collection using updateMany
db.getCollection('marketing').updateMany(
  { "CampaignName": "Spring Sale" },
  {
      $set: {
          "Budget": 8500
      }
  }
);


//4. D = Delete Documents: deleteOne(), deleteMany()

/*
For deleting operations
*/
// Delete a single document in the "Items" collection using deleteOne
use('Business');
db.getCollection('Items').deleteOne({ "ItemID": 1 });

// Delete multiple documents in the "Items" collection using deleteMany
db.getCollection('Items').deleteMany({ "Category": "Electronics" });

// Delete a single document in the "Sales" collection using deleteOne
db.getCollection('sales').deleteOne({ "OrderID": 1001 });

// Delete multiple documents in the "Sales" collection using deleteMany
db.getCollection('sales').deleteMany({ "Product": "Product A" });

// Delete a single document in the "Retail" collection using deleteOne
db.getCollection('retail').deleteOne({ "TransactionID": 1 });

// Delete multiple documents in the "Retail" collection using deleteMany
db.getCollection('retail').deleteMany({ "Product": "Product A" });

// Delete a single document in the "Marketing" collection using deleteOne
db.getCollection('marketing').deleteOne({ "CampaignID": 11 });

// Delete multiple documents in the "Marketing" collection using deleteMany
db.getCollection('marketing').deleteMany({ "CampaignName": "Spring Sale" });



// *********************** CRUD ends ****************** //


// Aggregation Pipeline for each of the 4 Collections. 

//1. item COLLECTION - we want to do the following here. 


db.Items.aggregate([
  {
      $group: {
          _id: "$Category",
          count: { $sum: 1 },
          avgPrice: { $avg: "$Price" },
          avgStockQuantity: { $avg: "$StockQuantity" }
      }
  },
  {
      $project: {
          _id: 0,
          Category: "$_id",
          count: 1,
          avgPrice: 1,
          avgStockQuantity: 1
      }
  }
])


// so there is one such user, the code shows the count and email domain for the user. 

//2. sales COLLECTION - we want to do the following here. 



var pipeline = [
  {
    $group: {
      _id: "$CustomerName",
      totalQuantity: { $sum: "$Quantity" },
      averageTotalAmount: { $avg: "$TotalAmount" },
      maxTotalAmount: { $max: "$TotalAmount" },
      minTotalAmount: { $min: "$TotalAmount" },
    }
  },
  {
    $sort: { totalQuantity: -1 }
  }
];

var result = db.getCollection('sales').aggregate(pipeline);

while (result.hasNext()) {
  printjson(result.next());
}




//2. marketing COLLECTION - we want to do the following here. 

var pipeline = [
  {
    $group: {
      _id: "$CampaignName",
      totalBudget: { $sum: "$Budget" },
      uniqueCampaigns: { $addToSet: "$CampaignID" },
      averageBudget: { $avg: "$Budget" },
      maxBudget: { $max: "$Budget" },
      minBudget: { $min: "$Budget" },
    }
  },
  {
    $sort: { totalBudget: -1 }
  }
];

var result = db.getCollection('marketing').aggregate(pipeline);

while (result.hasNext()) {
  printjson(result.next());
}






//2. retail COLLECTION - we want to do the following here. 


var pipeline = [
  {
    $group: {
      _id: "$CustomerName",
      totalQuantity: { $sum: "$Quantity" },
      averageTotalAmount: { $avg: "$TotalAmount" },
      maxTotalAmount: { $max: "$TotalAmount" },
      minTotalAmount: { $min: "$TotalAmount" },
    }
  },
  {
    $sort: { totalQuantity: -1 }
  }
];

var result = db.getCollection('Retail').aggregate(pipeline);

while (result.hasNext()) {
  printjson(result.next());
}




