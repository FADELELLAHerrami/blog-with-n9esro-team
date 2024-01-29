class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @articles = @user.articles
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :photo)
  end
end
