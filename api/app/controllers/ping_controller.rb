class PingController < ApplicationController
    before_action :authenticate_user!

    def index
        render json: { ping: true }
    end
end
