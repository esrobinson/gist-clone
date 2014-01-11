# json.parital! 'gists/gist', :gist => @gist

json.id @gist.id
json.title @gist.title
json.favorite @gist.user_favorite(current_user)
