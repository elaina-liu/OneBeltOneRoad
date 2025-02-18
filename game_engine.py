transfer_entries = {
    6: 15, 7: 11, 11: 7, 15: 6,
    14: 38, 17: 26, 19: 23, 23: 19, 24: 42, 26: 17,
    30: 50, 34: 59, 38: 14, 39: 49, 45: 63, 42: 24,
    49: 39, 50: 30, 59: 34, 63: 45
}
countries = [4, 13, 21, 25, 33, 41, 48, 60]
users_info = [{"location": 0, "status": False, "term": True},
              {"location": 0, "status": False, "term": False},
              {"location": 0, "status": False, "term": False},
              {"location": 0, "status": False, "term": False}]

users = []

def game_func(term_info):
    steps = term_info["step"]
    termOfUsers = term_info["user"]
    users_info[termOfUsers]["location"] += steps
    location = users_info[termOfUsers]["location"]
    if location in transfer_entries.keys():
        users_info[termOfUsers]["location"] = transfer_entries[location]
    if location in countries:
        users_info[termOfUsers]["status"] = True
    users_info[termOfUsers]["term"] = False
    while True:
        termOfUsers += 1
        if users_info[termOfUsers % 4]["status"]:
            users_info[termOfUsers % 4]["status"] = False
        else:
            users_info[termOfUsers % 4]["term"] = True
            break
    return users_info

# {step: 0-6}