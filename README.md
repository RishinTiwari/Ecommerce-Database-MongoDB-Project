MongoDB E-commerce Project


Overview
This MongoDB project focuses on creating a robust database for an e-commerce
business scenario that involves online sales transactions. The database includes
four collections: Retail, Sales, Marketing, and Items. Each collection serves a
specific purpose, supporting various aspects of the e-commerce business, such as
transactions, marketing campaigns, and product management.
Collections and Data Description
1. Retail Collection
- Data: Represents transactions in a physical retail store.
- Data Types:
- `_id`: ObjectId
- `CustomerName`: String
- `Product`: String
- `Quantity`: Int32
- `TotalAmount`: Double
- `TransactionDate`: String
- `TransactionID`: Int32
- `UnitPrice`: Double
- Business Purpose: Tracks individual transactions in a physical store, aiding in
sales, inventory management, and customer analytics.
2. Sales Collection
- Data: Stores data related to online sales transactions.
- Data Types:
- `_id`: ObjectId
- `CustomerName`: String
- `Product`: String
- `Quantity`: Int32
- `TotalAmount`: Double
- `OrderDate`: String
- `OrderID`: Int32
- `UnitPrice`: Double
- Business Purpose: Manages and tracks online sales transactions, supporting
order processing, sales analysis, and customer order history.
3. Marketing Collection
- Data: Contains marketing campaign details.
- Data Types:
- `_id`: ObjectId
- `Budget`: Int32
- `CampaignID`: Int32
- `CampaignName`: String
- `EndDate`: String
- `StartDate`: String
- Business Purpose: Tracks and manages marketing campaigns, aiding in budget
allocation, campaign details, and analysis.
4. Items Collection
- Data: Holds information about products available for sale.
- Data Types:
- `_id`: ObjectId
- `ItemID`: Int32
- `ItemName`: String
- `Category`: String
- `Price`: Double
- `StockQuantity`: Int32
- Business Purpose: Serves as the product catalog, containing details about each
product's name, category, price, and stock quantity.
MongoDB Playground
The project includes a MongoDB Playground developed using Visual Studio Code.
The playground demonstrates CRUD operations and aggregation pipelines for each
collection. The code snippets cover creating, reading, updating, and deleting
documents, as well as aggregation operations.
Deliverables
1. CSV Files: Contain data from all collections.
2. MS Word Document: Includes schemas (JSON) for all collections with detailed
descriptions of data, data types, and business purposes.
3. MongoDB File (.mongodb): Contains code for the MongoDB Playground,
demonstrating CRUD operations and aggregation pipelines.
How to Review
1. Download the ZIP file.
2. Extract the contents.
3. Explore CSV files for data.
4. Refer to the MS Word document for detailed collection schemas and
descriptions.
5. Open the MongoDB Playground (.mongodb) file in Visual Studio Code to
review the MongoDB code.
Feel free to reach out for any clarifications or additional information.
