import java.awt.*;

public class Main {
    public static void main(String[] args) {
        int sw = 800;
        int sh = 800;
        int N = 10;

        int R = 50;
        Circle[] circles = new Circle[N];
        for( int i=0; i<N; i+=1 ) {
            int x = (int)(Math.random() * (sw - 2 * R) + R);
            int y = (int)(Math.random() * (sh - 2 * R) + R);
            int vx = (int)(Math.random() * 11 - 5);
            int vy = (int)(Math.random() * 11 - 5);
            circles[i] = new Circle(x, y, R, vx, vy);
        }

        EventQueue.invokeLater(() -> {
            AFrame frame = new AFrame("Welcome", sw, sh);
            new Thread(() -> {
                while(true) {
                    frame.render(circles);
                    AHelper.pause(20);
                    for(Circle circle: circles) {
                        circle.move(0, 0, sw, sh);
                    }
                }
            }).start();
        });
    }
}