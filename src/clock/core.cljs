(ns clock.core)

(defn ^:export start-clock []
  (let [header (js/document.getElementById "clock")
        get-formatted-time #(.format (js/moment) "h::mm:ss a")
        set-formatted-time #(set! (.-innerHTML header) get-formatted-time)]
  (set-formatted-time)
  (js/setInterval set-formatted-time 1000)))
