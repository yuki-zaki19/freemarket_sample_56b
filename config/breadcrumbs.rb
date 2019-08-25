crumb :root do
  link "メルカリ", root_path
end

crumb :users do
  link 'マイページ', users_path
end

crumb :show do
  @product = Product.find(params[:id])
  link @product.name, product_path(@product.id)
end

crumb :edit do
  link 'プロフィール', edit_user_path
  parent :users
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

crumb :news do
  link 'お知らせ', news_users_path
  parent :users
end

crumb :past do
  link '購入した商品-過去の取引', past_users_path
  parent :users
end

crumb :transaction do
  link '購入した商品-取引中', transaction_users_path
  parent :users
end

crumb :task do
  link 'やることリスト', task_users_path
  parent :users
end

crumb :deliver do
  link '発送元・お届け先住所変更', deliver_users_path
  parent :users
end

crumb :identification do
  link '本人情報の登録', edit_identification_path
  parent :users
end
