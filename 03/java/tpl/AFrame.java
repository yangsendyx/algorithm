import javax.swing.*;
import java.awt.*;
import java.awt.geom.Ellipse2D;

public class AFrame extends JFrame {
    private int canvasWidth;
    private int canvasHeight;

    public AFrame(String title, int canvasWidth, int canvasHeight) {
        super(title);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        ACanvas canvas = new ACanvas();
        setContentPane(canvas);
        pack();
        // setSize(canvasWidth, canvasHeight);
        setResizable(false);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public AFrame(String title) {
        this(title, 1024, 768);
    }

    public int getCanvasWidth() { return canvasWidth; }
    public int getCanvasHeight() { return canvasHeight; }

    private Circle[] circles;
    public void render(Circle[] circles) {
        this.circles = circles;
        repaint();
    }

    private class ACanvas extends JPanel {
        @Override
        public void paintComponent(Graphics g) {
            super.paintComponent(g);
            // g.drawOval(50, 50, 300, 300);
            Graphics2D g2d = (Graphics2D)g;
            g2d.addRenderingHints(new RenderingHints(
                RenderingHints.KEY_ANTIALIASING,
                RenderingHints.VALUE_ANTIALIAS_ON
            ));

            // AHelper.setColor(g2d, Color.RED);
            // AHelper.setStrokeWidth(g2d, 5);
            // AHelper.strokeCircle(g2d, canvasWidth/2, canvasHeight/2, 200);

            // AHelper.setColor(g2d, Color.GRAY);
            // AHelper.fillCircle(g2d, canvasWidth/2, canvasHeight/2, 200);

            AHelper.setStrokeWidth(g2d, 1);
            AHelper.setColor(g2d, Color.RED);
            for(Circle circle: circles) {
                AHelper.strokeCircle(g2d, circle.x, circle.y, circle.getR());
            }
        }

        @Override
        public Dimension getPreferredSize() {
            return new Dimension(canvasWidth, canvasHeight);
        }
    }
}