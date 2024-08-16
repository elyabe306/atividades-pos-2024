import requests

response = requests.get("https:jsonplaceholder.typicode.com/users/6")

print(response.status_code)
user_id = input("Digite o ID: ")
user = response.json()(int[user_id])
print("User: ", user['name'], "Email: ", user['email'] )
