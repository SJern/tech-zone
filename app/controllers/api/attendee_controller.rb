class Api::AttendeeController < ApplicationController
  def index
    @attendees = Attendee.find_by_event_id(attendee_params[:event_id])
    render :index
  end

  def create
    @attendee = Attendee.new(attendee_params)
    if @attendee.save!
      self.index
    else
      @errors = @attendee.errors
      render :error
    end
  end

  private
  def attendee_params
    params.require(:attendee).permit(:event_id, :name, :bootcamp)
  end
end
