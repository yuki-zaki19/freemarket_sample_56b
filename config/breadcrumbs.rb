crumb :root do
  link "メルカリ", root_path
end

crumb :users do
  link 'マイページ', users_path
end

crumb :card do
  link '支払い方法', card_users_path
  parent :users
end

crumb :logout do
  link 'ログアウト', logout_users_path
  parent :users
end

crumb :exhibit do
  link '出品した商品-出品中', exhibit_users_path
  parent :users
end

crumb :trade do
  link '出品した商品-取引中', trade_users_path
  parent :users
end

crumb :sale do
  link '出品した商品-売却済み', sale_users_path
  parent :users
end

crumb :identification do
  link '本人情報の登録', new_identification_path
  parent :users
end
