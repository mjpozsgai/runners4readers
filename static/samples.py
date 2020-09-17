

# machine id : machine name
machines = {
  1: "workshop",
  2: "mini microvac",
  3: "irradiator"
  4: "polymer extruder",
  5: "high velocity crusher",
  6: "lightning harvester"
}

# machine id : cost per hour
cost = {
    1: 99,
    2: 2000,
    3: 2200,
    4: 500,
    5: 10000,
    6: 8800
}

#dictionary where key is a clients username (must be unique usernames)
#when a client signs in, if username/password match, assign and return session_token
#use session_token in header of all API requests
clients[username] = {
    "name": "John Doe"
    "password": "12345",
    "reservations": [res_id],
    "funds": 0,
    "active": True,
    "token", session_token
}


managers[username] = {
    "name": "Jane Doe"
    "password": "12345",
    "active": True,
    "token", session_token
}

#dictionary where date of reservation is key
#each date has a list of reservations represented as a dictionary
reservations[date] = [
    {"reservation_id": uuid,
    "start_time": t1,
    "end_time":t2,
    "duration": t2-t1,
    "machine": machine_id,
    "cost": (cost[machine_id] * duration),
    "username": username}
]







<RoutingRules>
  <RoutingRule>
    <Condition>
      <HttpErrorCodeReturnedEquals>404</HttpErrorCodeReturnedEquals>
    </Condition>
    <Redirect>
      <HostName>myhostname.com</HostName>
      <ReplaceKeyPrefixWith>#!/</ReplaceKeyPrefixWith>
    </Redirect>
  </RoutingRule>
  <RoutingRule>
    <Condition>
      <HttpErrorCodeReturnedEquals>403</HttpErrorCodeReturnedEquals>
    </Condition>
    <Redirect>
      <HostName>myhostname.com</HostName>
      <ReplaceKeyPrefixWith>#!/</ReplaceKeyPrefixWith>
    </Redirect>
  </RoutingRule>
</RoutingRules>
