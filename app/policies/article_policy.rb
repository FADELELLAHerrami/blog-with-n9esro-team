





class ArticlePolicy < ApplicationPolicy
    def show?
      true
    end

    def destroy?
      record.user == user
    end
end
