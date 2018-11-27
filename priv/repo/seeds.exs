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
  image: "https://identicapi.herokuapp.com/img/" <> user,
  password: "secret",
  username: user
}
|> WhatChat.Accounts.create_user
