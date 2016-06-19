class Attendee < ActiveRecord::Base
  def self.find_by_event_id(id)
    Attendee.all.where(event_id: id)
  end
end
