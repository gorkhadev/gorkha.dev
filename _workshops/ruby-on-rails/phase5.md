---
layout: tutorial_series
learning_type: workshop
tutorial_name: ruby-and-rails
date: 11th Oct, 2020 02:00:00
title: Adding uploading image feature
description: Learn to add image to the idea in the application.
excerpt: A hands-on learning experience on Ruby language and Ruby on Rails framework
thumbnail: workshop/ideapasal/thumbnail.jpg
permalink: /workshop/ruby-and-rails/phase5/
prev_link: /workshop/ruby-and-rails/phase4/
next_link: /workshop/ruby-and-rails/phase6/
comments: true
---

{% include util/lazy-img.html src="workshop/ideapasal/ideapasal5.jpg" alt="Idea Pasal Image uploading" %}

In this phase, we will add the feature of idea image upload in our application.

## Add upload image feature

Open the `Gemfile` file in your Text Editor and below the following line:

```ruby
gem "sqlite3"
```

add this line and save it:

```ruby
gem "carrierwave"
```

In the terminal where you ran `rails s` earlier, press `Ctrl+C` to quit the Rails server and then run the following command:

```ruby
bundle install
```

This will install the `carrierwave` gem which you can use to upload image.

## Generate an image uploader

Now, our gem is ready to be used. We need to create an uploader file that will handle uploading of images in our application.

Run the following command to generate an uploader:

```ruby
rails generate uploader Image
```

This command should give you a file with name `app/uploaders/image_uploader.rb` which defines which kind of storage will be used for image, where the uploaded files will be stored, which extensions are allowed etc.

Have a look into the file by running `cat app/uploaders/image_uploader.rb`.

__NOTE:__ If you got an error like the uploader cannot be found while running above command, then try to add `gem "net-ssh"` in the Gemfile and perform bundle install.

## Attaching the image uploader to the idea model

Now, the application knows about a way to upload images. But, it needs a bit of help to understand where you want to attach these uploads to.

Open the model file `app/models/idea.rb`. This file is used to store your ideas in the database and fetch the ideas to show them.

We’ll update it to tell the application which field is a file upload.

Update the file as below:

```ruby
class Idea < ApplicationRecord
  mount_uploader :image, ImageUploader
end
```

The `mount_uploader` line tells the `Idea` model that the image field is a file upload field. It will store information about the file upload.

## Uploading the image

Update the form so that we can create and edit images.

Open the `app/views/ideas/_form.html.erb` file and change the following line:

```erb
<%= form.text_field :image %>
```

to below line and save it:

```erb
<%= form.file_field :image %>
```

Now, edit any one of the idea and then you will see upload icon. Try to upload the image and click on update.

## Displaying Images

To show the image in the idea page, open the `app/views/ideas/_idea.html.erb` and change the following line:

```erb
<%= idea.image %>
```

to below line and save the file:

```erb
<%= image_tag(idea.image_url, width: 600) if idea.image? %>
```

Refresh the Browser. Your uploaded image should now be visible!

- `image_tag` helper method:

  It returns an HTML image tag for the source we passed. The source can be a full path, a file, or an Active Storage attachment.

  Following is the brief example how it works:

  ```ruby
    image_tag("icon")
    # => <img src="/assets/icon" />
    image_tag("icon.png")
    # => <img src="/assets/icon.png" />
    image_tag("icon.png", size: "16x10", alt: "Edit Entry")
    # => <img src="/icons/icon.gif" width="16" height="16" />
    image_tag("/icons/icon.gif", height: '32', width: '32')

    image_tag(user.avatar)
    # => <img src="/rails/active_storage/blobs/.../tiger.jpg" />
  ```

  Read more about `image_tag` in [ActionView::Helpers::AssetTagHelper documentation.](https://api.rubyonrails.org/v7.0.4.2/classes/ActionView/Helpers/AssetTagHelper.html#method-i-image_tag){:target="_blank"}

{% include util/congrats.html
   text="You have learnt to add the basic feature of uploading image to an idea in the application."
%}

Click __Next__ to proceed to perform the final styling of your application.
