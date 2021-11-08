ActiveAdmin.register User do
  permit_params :name, :email, :surname, :state, :mood, :info, :contacts, :role_id

  scope("Пользователи компании", show_count: true, default: true){ |scope| scope.company(current_user.company.id) }

  filter :role_name_cont, label: 'Role'
  filter :name
  filter :surname
  filter :email
  filter :state


  index title: "Пользователи CRM" do
    column('Почта', :email)
    column('Имя', :name)
    column('Фамилия', :surname)
    column('Должность', :role)
    column('Статус', :state)
    actions
  end

  show do
    attributes_table do
      row('Почта', :email, &:email)
      row('Имя', :name, &:name)
      row('Фамилия', :surname, &:surname)
      row('Должность', :role, &:role)
      row('Статус', :state, &:state)
      row('Настроение', :mood, &:mood)
      row('Информация о себе', :info, &:info)
      row('Контакты', :contacts, &:contacts)
  end
      # row('Аватар') { |u| u.avatar? ? image_tag(u.avatar.url) : 'Нет аватара'}
  end

  form do |f|
    user
    f.inputs do
      f.input :email
      f.input :name
      f.input :surname
      f.input :role, as: :select, collection: Role.company(current_user.company.id)
      f.input :email
      f.input :state
      f.input :mood
      f.input :info
      f.input :contacts
    end

    f.actions
  end
end
