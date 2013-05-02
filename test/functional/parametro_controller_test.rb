require 'test_helper'

class ParametroControllerTest < ActionController::TestCase
  test "should get Listar" do
    get :Listar
    assert_response :success
  end

  test "should get Buscar" do
    get :Buscar
    assert_response :success
  end

end
