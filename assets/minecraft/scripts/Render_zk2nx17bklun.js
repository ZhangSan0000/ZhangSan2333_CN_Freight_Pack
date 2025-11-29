var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);

function init(par1, par2)
{	
	body = renderer.registerParts(new Parts("body"));
	Wheel = renderer.registerParts(new Parts("lun"));
}

function render(entity, pass, par3)
{
	var angle = 0.0;
	if(entity != null)
	{
		angle = renderer.getWheelRotationR(entity);
	}

    GL11.glPushMatrix();
	body.render(renderer);
	GL11.glPopMatrix();
	renderWheel(angle);
}

function renderWheel(angle)
{
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, -0.615, 0.875);
	GL11.glRotatef(angle, 1.0, 0.0, 0.0);
	Wheel.render(renderer);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, -0.615, -0.875);
	GL11.glRotatef(angle, 1.0, 0.0, 0.0);
	Wheel.render(renderer);
	GL11.glPopMatrix();
}

