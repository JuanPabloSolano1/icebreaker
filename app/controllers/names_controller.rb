class NamesController < ApplicationController
    skip_before_action :verify_authenticity_token
   def index
     @names = Name.all
     @sentences = Sentence.all
   end 

   def destroy
    @name = Name.find(params[:id])
    @name.destroy
   end
end
