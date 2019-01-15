# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     WhatChat.Repo.insert!(%WhatChat.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
user = (:crypto.strong_rand_bytes(15) |> Base.url_encode64 |> binary_part(0, 15))
%{
  email: user <> "@email.com",
  #image: "https://identicapi.herokuapp.com/img/" <> user,
  image: "https://loremflickr.com/400/400/?lock=" <> Integer.to_string(:rand.uniform(100)), 
  password: "secret",
  username: user
}
|> WhatChat.Accounts.create_user
