
module Api
	class EventsController < ApplicationController
	def index
		@data = Event.all.select(:id,:name, :event_date, :description, :place,:image)
		render json: @data
	end
	def search
		  query = params[:query]
		  events = Event.ransack(name_cont:query,place_cont:query, description_cont: query, m:'or').result
		  render json: events
	end

	def filter
		  events = Event.ransack(name_cont:params['name'],place_cont:params['place'], m:'and').result
		  render json: events
	end

	def create
		  event = Event.new(event_params)
		  if event.save
		    render json: event
		  else
		    render nothing: true, status: :bad_request
		  end
	end

	def destroy
		Event.find_by(id: params['id']).destroy
		@data = Event.all.select(:id,:name, :event_date, :description, :place,:image)
		render json: @data
	end

	private

	def event_params
	  params.require(:event).permit(:name, :description, :event_date, :place,:image)
	end
	end
end
