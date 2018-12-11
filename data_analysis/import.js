#!/usr/bin/mongo --quiet

//Load data
print("Loading data..\n");
load('data_test.js'); //The file from Firebase

//Connect to MongoDB
var db = connect("mongodb://pina:pina1234@ds259105.mlab.com:59105/data-from-firebase");

//Edit data
var lists = []
var products = []
var products_lists = []
var users = []
var tags = []
var tags_products = []
var prices = []

var collection = "products"
for (key in data[collection]) {
	var doc = data[collection][key];
	var new_product = {
		"product_id": key,
		"name": doc["name"]
	}
	products.push(new_product)
}

collection = "users"
for (key in data[collection]) {
	var doc = data[collection][key];
	var new_user = {
		"user_id": key,
		"name": doc["name"],
		"email": doc["email"]
	}
	users.push(new_user)
}

collection = "tags"
for (key in data[collection]) {
	var doc = data[collection][key];
	var new_tag = {
		"tag_id": key,
		"name": key
	}
	for (i in doc) {
		new_tag_prod = {
			"tag_id": key,
			"product_id": doc[i]
		}
		tags_products.push(new_tag_prod)
	}
	tags.push(new_tag)
}

var collection = "lists"
for (key in data[collection]) {
	var doc = data[collection][key];
	var user_id = doc["user_id"] === undefined ? doc["userId"] : doc["user_id"]
	var new_list = {
		"list_id": key,
		"user_id": user_id,
		"name": doc["name"]
	}
	for (i in doc["products"]) {
		var doc_prod = doc["products"][i];
		if (doc_prod !== null) {
			var new_list_prod = {
				"list_id": key,
				"product_id": i,
				"quantity": doc_prod["quantity"]
			}
			products_lists.push(new_list_prod)
		}
	}
	lists.push(new_list)
}

var collection = "prices"
for (key in data[collection]) {
	var doc = data[collection][key];
	for (i in doc) {
		var doc_price = doc[i];
		var d = new Date(parseInt(i))

		var new_price = {
			"product_id": key,
			"date": d
		}
		for (p in doc_price) {
			new_price[p] = doc_price[p]
		}
		prices.push(new_price)
	}
}


var final_data = {
	"lists": lists,
	"users": users,
	"products": products,
	"products_lists": products_lists,
	"tags": tags,
	"tags_products": tags_products,
	"prices": prices
}


//Add collections
/*for (collection in final_data) {

	print("Working on collection " + collection + "..");
	//Delete any previous data..
	db[collection].remove({});

	for (key in final_data[collection]) {
		var doc = final_data[collection][key];
		doc.firebaseId = key; //Add the object key to the new document, for later reference 
		db[collection].insert(doc);
	}

}*/