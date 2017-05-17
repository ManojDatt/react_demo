class Event < ApplicationRecord
  mount_base64_uploader :image, ImageUploader
  def crop_x
    120
  end
  def crop_y
    120
  end
  def crop_width
    220
  end
  def crop_height
    120
  end
  
end
