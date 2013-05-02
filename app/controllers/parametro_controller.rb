class ParametroController < ApplicationController
  def Listar
  	@params = Wlparams::TxtToParam.saved_rows
  end

  def Buscar
  end
end
