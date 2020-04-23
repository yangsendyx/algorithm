
public class MaxHeap<E extends Comparable<E>> {
    private Array<E> data;

    public MaxHeap(int capacity) {
        data = new Array<>(capacity);
    }

    public MaxHeap() {
        data = new Array<>();
    }

    public MaxHeap(E[] arr) {
        data = new Array<>(arr);
        int index = parent(size() - 1);
        while( index >= 0 ) {
            siftDown(index);
            index--;
        }
    }

    public int size() {
        return data.getSize();
    }

    public boolean isEmpty() {
        return data.isEmpty();
    }

    private int parent(int index) {
        if( index == 0 ) {
            throw new IllegalArgumentException("index-0 doesn't have parent.");
        }
        return (index - 1) / 2;
    }

    private int lchild(int index) {
        return 2 * index + 1;
    }

    private int rchild(int index) {
        return 2 * index + 2;
    }

    public void add(E e) {
        data.addLast(e);
        siftUp(data.getSize() - 1);
    }

    private void siftUp(int index) {
        while(index > 0) {
            int pindex = parent(index);

            E pe = data.get(pindex);
            E se = data.get(index);

            if( se.compareTo(pe) > 0 ) {
                data.swap(index, pindex);
                index = pindex;
            } else {
                index = 0;
            }
        }
    }

    public E findMax() {
        if( data.getSize() == 0 ) {
            throw new IllegalArgumentException("Can not findMax when heap is empty.");
        }
        return data.get(0);
    }

    public E extractMax() {
        E max = findMax();
        data.swap(0, size() - 1);
        data.removeLast();

        siftDown(0);
        return max;
    }

    private void siftDown(int index) {
        int v = lchild(index);
        if( v < data.getSize() ) {
            int r = rchild(index);
            if( r < data.getSize() && data.get(v).compareTo(data.get(r)) < 0 ) {
                v = r;
            }

            if( data.get(v).compareTo(data.get(index)) > 0 ) {
                data.swap(v, index);
                siftDown(v);
            }
        }
        
        /* while( lchild(index) < data.getSize() ) {
            int v = lchild(index);
            int r = rchild(index);

            if( r < data.getSize() && data.get(v).compareTo(data.get(r)) < 0 ) {
                v = r;
            }

            if( data.get(v).compareTo(data.get(index)) > 0 ) {
                data.swap(v, index);
                index = v;
            }
        } */
    }

    public E replace(E e) {
        E max = findMax();
        data.set(0, e);

        siftDown(0);
        return max;
    }
}
